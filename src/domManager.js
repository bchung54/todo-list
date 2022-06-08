import Project from "./project";
import { createTask } from "./task";

const domManager = (function() {

    // DOM Elements
    const generalTabs = document.querySelectorAll('.general-tab');
    const projectList = document.querySelector('.project-list');
    const newProjectInput = document.querySelector('.new-project');
    const projectForm = document.querySelector('.project-form');

    const addTask = document.querySelector('.add-task');
    const taskForm = document.querySelector('.task-form');
    const newTaskInput = document.getElementById('new-task');
    const mainDisplay = document.querySelector('.display');

    const editForm = document.querySelector('.edit-form');
    const addClose = document.getElementById('add-close');

    const bgModal = document.querySelector('.bg-modal');
    const modalClose = document.getElementById('edit-close');
    const modalContent = document.querySelector('.modal-content');
    
    let onDisplayIndex = 0;

    // Display Functions

    function initDisplay() {
        if (Project.projectCount > 0) {
            displayProjectList();
            displayProject(0);
            addTask.style.display = 'flex';
        }

        // Eventlisteners
        //
        generalTabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                displayGeneralTab(this);
            });
        });

        // New project submitted
        projectForm.addEventListener('submit', function(e) {
            // Update index for current project on display to the added project
            onDisplayIndex = Project.projectCount;

            // Add the new project to the HTML and Project module
            projectList.append(createSidebarProject(newProjectInput.value, onDisplayIndex));
            Project.addProject(Project.createProject(newProjectInput.value));
            addTask.style.display = 'flex';

            // Reset display and reset form values
            resetDisplay();
            this.reset();

            e.preventDefault();
        });
        
        // Show form for adding tasks
        addTask.addEventListener('click', function() {
            taskForm.style.display = 'block';
            newTaskInput.select();
        });

        // Close add task form and reset values
        addClose.addEventListener('click', function() {
            taskForm.style.display = 'none';
            taskForm.reset();
        })

        // Submit new task information
        taskForm.addEventListener('submit', function(e) {
            const title = document.getElementById('new-task').value;
            const dueDate = document.getElementById('new-task-dueDate').value;
            const priority = document.querySelector('input[name="priority-new"]:checked').value;
            const labels = [document.getElementById('new-task-labels').value];
            const notes = document.getElementById('new-task-notes').value;
            const currProject = Project.getProject(onDisplayIndex);
            
            // Add information to new project
            currProject.addTask(createTask(title, dueDate, priority, labels, notes));
            
            // Close form and reset display
            this.style.display = 'none';
            this.reset();
            resetDisplay();
            
            e.preventDefault();
        });

        // Submit updated task information
        editForm.addEventListener('submit', function(e) {
            const task = Project.getProject(onDisplayIndex).getTask(bgModal.getAttribute('task-index'));

            // Update all information for the task
            task.title = document.getElementById('edit-task').value;
            task.setDueDate(document.getElementById('edit-date').value);
            task.priority = document.querySelector('input[name="priority-edit"]:checked').value;
            task.labels = document.getElementById('edit-labels').value.split(',');
            task.notes = document.getElementById('edit-notes').value;

            // Close form and reset display
            bgModal.style.display = 'none';
            resetDisplay();
            
            e.preventDefault();
        });

        // Close forms through the X button
        modalClose.addEventListener('click', () => { bgModal.style.display = 'none' })
        bgModal.addEventListener('click', () => { bgModal.style.display = 'none' });

        // Stop propogation for modal clicks
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        });
    };

    function resetDisplay() {
        // Remove all items in project list from sidebar
        while (projectList.hasChildNodes()) { projectList.removeChild(projectList.firstChild) };

        // Repopulate project list in sidebar
        if (Project.projectCount != 0) { displayProjectList() };

        // Remove the project element in project display
        if (mainDisplay.hasChildNodes()) { mainDisplay.removeChild(mainDisplay.firstChild) };

        // Repopulate project display with current project
        if (document.querySelector('.onDisplay')) { displayProject(onDisplayIndex) };
    }

    // Helper functions: Container builders

    function createContainer(...args) {
        const container = document.createElement('div');
        args.forEach((element) => container.classList.add(element));
        return container;
    };
    
    function createTextContainer(text, className) {
        const textContainer = document.createElement('span');
        textContainer.classList.add(className);
        textContainer.textContent = text;
        return textContainer;
    };

    // General Tab Display Functions

    function displayGeneralTab(tab) {
        if (mainDisplay.querySelector('.display-element')) {
            mainDisplay.removeChild(mainDisplay.querySelector('.display-element'));
        };
        mainDisplay.prepend(createDisplayElement(tab));

    };

    function createDisplayElement(tab) {
        const container = createContainer('display-element');

        const titleElement = document.createElement('h2');
        switch (tab.textContent) {
            case "Home":
                titleElement.textContent = "All Tasks";
                break;
            case "Today":
                titleElement.textContent = "Tasks Within the Day";
                break;
            case "Week":
                titleElement.textContent = "Tasks Within the Week";
                break;
        }

        const taskList = document.createElement('div');
        taskList.classList.add('task-list');

        const allTasks = Project.getTasks(tab.textContent);
        for (let i = 0; i < allTasks.length; i++) {
            const element = createTaskElement(allTasks[i], i);
            taskList.append(element);
        };

        container.append(titleElement);
        container.append(document.createElement('hr'));
        container.append(taskList);
        return container;
    };

    // Sidebar Display Functions

    function displayProjectList() {
        Project.projectList.forEach((element, index) => {projectList.append(createSidebarProject(element.title, index))})
    };

    function createSidebarProject(title, index) {
        // Create container for the sidebar project list item
        const container = createTextContainer(title, 'sidebar-project');
        container.setAttribute('project-index', index);
        if (index == onDisplayIndex) {container.classList.add('onDisplay')};

        container.addEventListener('click', function() {
            // Switch onDisplay class name to next element
            document.querySelector('.onDisplay').classList.remove('onDisplay');
            this.classList.add('onDisplay');
            
            // Update index of project to be displayed
            onDisplayIndex = parseInt(this.getAttribute('project-index'));
            
            // Remove project on display and replace with next project to be displayed
            mainDisplay.removeChild(mainDisplay.firstChild);
            displayProject(onDisplayIndex);
        });

        // Create the delete button for the project list item
        const deleteProject = createTextContainer('delete', 'material-icons');
        
        deleteProject.addEventListener('click', function(e) {
            const parentElement = this.parentElement;
            const deleteIndex = parentElement.getAttribute('project-index');

            // Update display index based on current value and the project that is being deleted
            if (deleteIndex <= onDisplayIndex) {
                onDisplayIndex--;
                if (deleteIndex == onDisplayIndex == -1) {
                    onDisplayIndex = 0;
                }
            };
            
            // Remove project from the Project module, from the HTML document, and from Local Storage
            Project.deleteProject(deleteIndex);
            projectList.removeChild(parentElement);
            if (localStorage.hasOwnProperty(`projects-${deleteIndex}`)) { 
                localStorage.removeItem(`projects-${deleteIndex}`);
                localStorage.removeItem(`tasks-${deleteIndex}`);
            };

            if (Project.projectCount == 0) {addTask.style.display = 'none'};

            resetDisplay();
            e.stopImmediatePropagation();
        });
        
        container.append(deleteProject);
        return container;
    };

    // Project Display Functions

    function displayProject(index) {
        if (mainDisplay.querySelector('.display-element')) {
            mainDisplay.removeChild(mainDisplay.querySelector('.display-element'));
        }
        mainDisplay.prepend(createProjectElement(Project.getProject(index)));

    };

    function createProjectElement(project) {
        const container = createContainer('display-element');

        const titleElement = document.createElement('h2');
        titleElement.textContent = project.title;

        const taskList = document.createElement('div');
        taskList.classList.add('task-list');
        for (let i = 0; i < project.itemCount; i++) {
            const element = createTaskElement(project.getTask(i), i);
            taskList.append(element);
        };

        container.append(titleElement);
        container.append(document.createElement('hr'));
        container.append(taskList);
        return container;
    };

    function createTaskElement(task, index) {
        const container = createContainer('task', `priority-${task.priority}`);
        container.setAttribute('task-index', index);

        const taskHeader = createTaskHeader(task);
        taskHeader.addEventListener('click', toggleDetails);

        container.append(taskHeader);
        container.append(createTaskDetail(task));
        return container;
    };

    function toggleDetails() {
        this.parentElement.classList.toggle('show-detail');
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
        checkbox.addEventListener('click', function(e) {
            
            const taskElementIndex = this.parentElement.parentElement.getAttribute('task-index');
            const task = Project.getProject(onDisplayIndex).getTask(taskElementIndex);
            
            task.toggleComplete();
            e.stopPropagation();
        });

        const title = createTextContainer(task.title, 'task-title');
        const date = createTextContainer(`Due: ${task.getDueDate()}`, 'task-duedate');


        const taskActions = createContainer('task-action');
        const editTask = createTextContainer('edit_note', 'material-icons');
        editTask.addEventListener('click', function(e) {
            const taskIndex = this.parentElement.parentElement.parentElement.getAttribute('task-index');
            const task = Project.getProject(onDisplayIndex).getTask(taskIndex);
            document.getElementById('edit-task').value = task.title;
            document.getElementById('edit-date').value = task.dueDateInput;
            document.getElementById(`pedit${task.priority}`).setAttribute('checked', 'checked');
            document.getElementById('edit-labels').value = task.labels;
            document.getElementById('edit-notes').value = task.notes;

            bgModal.setAttribute('task-index', taskIndex);
            bgModal.style.display = 'flex';
            e.stopPropagation();
        });

        const deleteTask = createTextContainer('delete', 'material-icons');
        deleteTask.addEventListener('click', function(e) {
            const currProject = Project.getProject(onDisplayIndex);
            const deleteIndex = this.parentElement.parentElement.getAttribute('task-index');
            currProject.deleteTask(deleteIndex);
            if (localStorage.hasOwnProperty(`tasks-${onDisplayIndex}`)) { 
                localStorage.setItem(`tasks-${onDisplayIndex}`, JSON.stringify(currProject.toJson()));
            };
            resetDisplay();
            e.stopImmediatePropagation();
        });

        taskActions.append(editTask);
        taskActions.append(deleteTask);

        container.append(checkbox);
        container.append(title);
        container.append(date);
        container.append(taskActions);
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
        onDisplayIndex
    };
})();

export default domManager;