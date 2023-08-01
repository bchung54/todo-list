
import storageAvailable from './storage.js';
import domManager from './domManager.js';
import Project from './project.js';
import { taskFromJson } from './task.js';
import './style.css';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signOut
} from 'firebase/auth';
import {
	getFirestore,
	collection,
    getDocs,
	addDoc,
	query,
	orderBy,
	limit,
	onSnapshot,
	setDoc,
	updateDoc,
	doc,
	serverTimestamp
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7W9Dq6eUvUNxZpFMVjRhxH0IyaCOXEho",
  authDomain: "todolist-8e151.firebaseapp.com",
  projectId: "todolist-8e151",
  storageBucket: "todolist-8e151.appspot.com",
  messagingSenderId: "998005222567",
  appId: "1:998005222567:web:0bb6f86f962b682771ff82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Signs-in
async function signIn() {
	// Sign in Firebase using popup auth and Google as the identity provider.
	var provider = new GoogleAuthProvider();
	await signInWithPopup(getAuth(), provider);
}

// Signs-out
function signOutUser() {
	// Sign out of Firebase.
	signOut(getAuth());
}

// Initiate firebase auth
function initFirebaseAuth() {
	// Listen to auth state changes.
	onAuthStateChanged(getAuth(), authStateObserver);
}

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || '/images/pngkey.com-totodile-png-484224.png';
}

// Returns the signed-in user's display name.
function getUserName() {
  return getAuth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!getAuth().currentUser;
}

/* signInButtonElement.addEventListener('click', signIn); */

// Init Services
const db = getFirestore();

// Collection Ref
const colRef = collection(db, 'tasks');

// Real Time Collection Data
onSnapshot(colRef, (snapshot) => {
    let tasks = [];
    snapshot.docs.forEach((doc) => {
        tasks.push({ ...doc.data(), id: doc.id })
    });
    console.log(tasks);
});

// Adding task
const newTaskForm = document.querySelector('#task-form');
newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addDoc(colRef, {
        title: newTaskForm.task.value,
        project: Project.getProject(domManager.onDisplayIndex).title,
        dueDate: newTaskForm.dueDate.value,
        priority: newTaskForm.priority.value,
        labels: newTaskForm.labels.value,
        notes: newTaskForm.notes.value
    })
});

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    window.addEventListener('submit', function(e) {
        if (e.target.classList.contains('project-form')) {
            let projectIndex = Project.projectCount - 1;
            localStorage.setItem(`projects-${projectIndex}`, JSON.stringify(Project.getProject(projectIndex)));
        } else if (e.target.classList.contains('task-form')) {
            let projectIndex = domManager.onDisplayIndex;
            localStorage.setItem(`tasks-${projectIndex}`, JSON.stringify(Project.getProject(projectIndex).toJson()));
            console.log(JSON.stringify(Project.getProject(projectIndex).toJson()));
        }
    });

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.hasOwnProperty(`projects-${i}`)) {
            let project = localStorage.getItem(`projects-${i}`);
            Project.addProject(Project.from(JSON.parse(project)));
        }
         if (localStorage.hasOwnProperty(`tasks-${i}`)) {
            let tasks = localStorage.getItem(`tasks-${i}`);
            let project = Project.getProject(i);
            JSON.parse(tasks).forEach((e) => {
                project.addTask(taskFromJson(e));
            });
        }
    }
}
else {
    // Too bad, no localStorage for us
}

domManager.initDisplay();