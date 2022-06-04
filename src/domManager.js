import Project from "./project";
import createTask from "./task";
import createInputBox from "./createInputBox";

const domManager = (function() {

    // DOM Elements
    const projectTab = document.getElementById('project-tab');
    const projectList = document.querySelector('.project-list');
    const addProject = document.querySelector('.add-project');
    const projectForm = document.querySelector('.project-form');
    const projectDisplay = document.querySelector('.project-container');
    
    let onDisplayIndex = 0;

    // Helpers
    function initDisplay() {
        displayProjectList();
        displayProject(0);

        const userInput = document.getElementById('new-project');

        // Eventlisteners
        //
        // Add project button
        addProject.addEventListener('click', function() {
            projectForm.style.display = 'block';
            userInput.select();
        });

        projectForm.addEventListener('submit', function(e) {
            projectList.append(createSidebarProject(userInput.value, Project.projectCount));
            Project.addProject(userInput.value);
            e.target.style.display ='none';
            userInput.value = '';
            e.preventDefault();
        });
    };

    function resetDisplay() {
        while (projectList.hasChildNodes()) {projectList.removeChild(projectList.firstChild)};
        displayProjectList();

        projectDisplay.removeChild(projectDisplay.firstChild);
        displayProject(onDisplayIndex);

        console.log(document.querySelector('.onDisplay'));
        // if (!document.querySelector('.onDisplay')) {
        //     document.querySelector(`[project-index="${onDisplayIndex}"]`).classList.add('onDisplay');
        // }
    }

    function createContainer(...args) {
        const container = document.createElement('div');
        args.forEach((element) => container.classList.add(element));
        return container;
    };
    
    function createTextContainer(text, className) {
        const textContainer = createContainer(className);
        textContainer.textContent = text;
        return textContainer;
    };

    // Sidebar Display functions
    function displayProjectList() {
        console.log(Project.projectList);
        Project.projectList.forEach((element, index) => {projectList.append(createSidebarProject(element.title, index))})
    };

    function createSidebarProject(title, index) {
        const container = createTextContainer(title, 'sidebar-project');
        container.setAttribute('project-index', index);
        if (index == onDisplayIndex) {container.classList.add('onDisplay')};

        container.addEventListener('click', function() {
            document.querySelector('.onDisplay').classList.remove('onDisplay');
            this.classList.add('onDisplay');
            onDisplayIndex = parseInt(this.getAttribute('project-index'));
            projectDisplay.removeChild(projectDisplay.firstChild);
            displayProject(onDisplayIndex);
        });

        const deleteProject = createTextContainer('delete', 'delete-project')
        
        deleteProject.addEventListener('click', function() {
            const parentElement = this.parentElement;
            const deleteIndex = parentElement.getAttribute('project-index');
            if (deleteIndex <= onDisplayIndex) {
                onDisplayIndex--;
                if (deleteIndex == onDisplayIndex == -1) {
                    onDisplayIndex = 0;
                }
            };
            
            Project.deleteProject(deleteIndex);
            parentElement.classList.add('onDisplay');
            projectList.removeChild(parentElement);

            resetDisplay();
        });
        
        container.append(deleteProject);
        return container;
    };

    // Project Display functions
    function displayProject(index) {
        projectDisplay.append(createProjectElement(Project.getProject(index)));

        if (projectDisplay.hasChildNodes()) {
            projectDisplay.removeChild(projectDisplay.firstChild);
        }
        projectDisplay.append(createProjectElement(Project.projectList[index]));
    };

    function createProjectElement(project) {
        const container = createContainer('project-element');

        const titleElement = document.createElement('h2');
        titleElement.textContent = project.title;

        const taskList = document.createElement('div');
        for (let i = 0; i < project.itemCount; i++) {
            const element = createTaskElement(project.getTask(i));
            taskList.append(element);
        };
        
        const addTask = document.createElement('button');
        addTask.textContent = '+ Add Task';

        const taskForm = document.createElement('form');
        taskForm.classList.add('task-form');
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.placeholder = 'New Task';
        textInput.setAttribute('id', 'new-task');
        taskForm.append(textInput);
        addTask.addEventListener('click', function(){
            taskForm.style.display = 'block';
            textInput.select();
        });

        const submit = document.createElement('input');
        submit.style.display = 'none';

        taskForm.addEventListener('submit', function(e) {
            const userInput = document.getElementsById('new-task');
            const newTask = createTaskElement(userInput.value);

            taskList.append(newTask);
            e.preventDefault();
        })

        container.append(titleElement);
        container.append(document.createElement('hr'));
        container.append(taskList);
        container.append(taskForm);
        container.append(addTask);
        // container.append(createAddBtn('todo').button);
        return container;
    };

    function createTaskElement(task) {
        const container = createContainer('task', `priority-${task.priority}`);

        const taskHeader = createTaskHeader(task);
        taskHeader.addEventListener('click', toggleDetails);

        container.append(taskHeader);
        container.append(createTaskDetail(task));
        return container;
    };

    function toggleDetails() {
        this.classList.toggle('show-detail');
        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        };
    }

    function createTaskHeader(task) {
        const container = createContainer('task-header');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const title = document.createElement('div');
        title.textContent = task.title;

        const date = document.createElement('div');
        date.textContent = "Due: " + task.dueDate;

        const editTask = createTextContainer('Edit', 'task-edit');

        const deleteTask = createTextContainer('Delete', 'task-delete');

        container.append(checkbox);
        container.append(title);
        container.append(date);
        container.append(editTask);
        container.append(deleteTask);
        return container;
    };

    function createTaskDetail(task) {
        const container = document.createElement('div');
        container.classList.add('task-detail');

        const labelsElement = document.createElement('div');
        labelsElement.classList.add('labels');
        labelsElement.textContent = "Labels: ";
        if (task.labels) {
            task.labels.forEach((element) => {
                const label = createLabel(element);
                labelsElement.append(label);
            });
        }

        const notesElement = document.createElement('div');
        notesElement.classList.add('notes');
        notesElement.textContent = "Notes: "
        if (task.notes) { notesElement.append(createNoteText(task.notes)) };

        container.append(labelsElement);
        container.append(notesElement);
        return container;
    };

    function createLabel(string) {
        const label = document.createElement('div');
        label.classList.add('label');
        label.textContent = `[${string}]`;
        return label;
    };

    function createNoteText(string) {
        const noteText = document.createElement('div');
        noteText.classList.add('note-text');
        noteText.textContent = string;
        return noteText;
    };

    return {
        initDisplay,
        createProjectElement
    };
})();

export default domManager;