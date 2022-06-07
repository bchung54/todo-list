import Project from "./project";
import createTask from "./task";

const domManager = (function() {

    // DOM Elements
    const projectTab = document.getElementById('project-tab');
    const projectList = document.querySelector('.project-list');
    const newProjectInput = document.querySelector('.new-project');
    const projectForm = document.querySelector('.project-form');

    const addTask = document.querySelector('.add-task');
    const taskForm = document.querySelector('.task-form');
    const newTaskInput = document.getElementById('new-task');
    const projectDisplay = document.querySelector('.display');

    const editForm = document.querySelector('.edit-form');
    const addClose = document.getElementById('add-close');

    const bgModal = document.querySelector('.bg-modal');
    const modalClose = document.getElementById('edit-close');
    const modalContent = document.querySelector('.modal-content');
    
    let onDisplayIndex = 0;

    // Helpers
    function initDisplay() {
        displayProjectList();
        displayProject(0);

        

        // Eventlisteners
        //
        // New project submitted
        projectForm.addEventListener('submit', function(e) {
            const newProjectIndex = Project.projectCount;
            onDisplayIndex = newProjectIndex;

            projectList.append(createSidebarProject(newProjectInput.value, newProjectIndex));
            Project.addProject(newProjectInput.value);
            resetDisplay();
            this.reset();
            e.preventDefault();
        });

        addTask.addEventListener('click', function() {
            taskForm.style.display = 'block';
            newTaskInput.select();
        });

        addClose.addEventListener('click', function() {
            taskForm.style.display = 'none';
            taskForm.reset();
        })

        taskForm.addEventListener('submit', function(e) {
            const title = document.getElementById('new-task').value;
            const dueDate = document.getElementById('new-task-dueDate').value;
            const priority = document.querySelector('input[name="priority"]:checked').value;
            const labels = [document.getElementById('new-task-labels').value];
            const notes = document.getElementById('new-task-notes').value;
            
            const currProject = Project.getProject(onDisplayIndex);
            currProject.addTask(createTask(title, dueDate, priority, labels, notes));
            this.style.display = 'none';
            this.reset();
            resetDisplay();
            e.preventDefault();
        });

        editForm.addEventListener('submit', function(e) {
            const task = Project.getProject(onDisplayIndex).getTask(bgModal.getAttribute('task-index'));
            task.title = document.getElementById('edit-task').value;
            task.setDueDate(document.getElementById('edit-date').value);
            task.priority = document.querySelector('input[type=radio][name=priority-edit]:checked').value;
            task.labels = document.getElementById('edit-labels').value.split(',');
            task.notes = document.getElementById('edit-notes').value;

            bgModal.style.display = 'none';
            resetDisplay();
            e.preventDefault();
        });

        modalClose.addEventListener('click', () => { bgModal.style.display = 'none' })
        bgModal.addEventListener('click', () => { bgModal.style.display = 'none' });
        modalContent.addEventListener('click', (e) => {
            // e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        });
    };

    function resetDisplay() {
        while (projectList.hasChildNodes()) { projectList.removeChild(projectList.firstChild) };
        if (Project.projectCount != 0) { displayProjectList() };

        if (projectDisplay.hasChildNodes()) { projectDisplay.removeChild(projectDisplay.firstChild) };
        if (document.querySelector('.onDisplay')) { displayProject(onDisplayIndex) };
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

        const deleteProject = createTextContainer('delete', 'material-icons');
        
        deleteProject.addEventListener('click', function(e) {
            const parentElement = this.parentElement;
            const deleteIndex = parentElement.getAttribute('project-index');

            if (deleteIndex <= onDisplayIndex) {
                onDisplayIndex--;
                if (deleteIndex == onDisplayIndex == -1) {
                    onDisplayIndex = 0;
                }
            };
            
            Project.deleteProject(deleteIndex);
            projectList.removeChild(parentElement);

            resetDisplay();
            e.stopImmediatePropagation();
        });
        
        container.append(deleteProject);
        return container;
    };

    // Project Display functions
    function displayProject(index) {
        if (projectDisplay.querySelector('.project-element')) {
            projectDisplay.removeChild(projectDisplay.querySelector('.project-element'));
        }
        projectDisplay.prepend(createProjectElement(Project.getProject(index)));

    };

    function createProjectElement(project) {
        const container = createContainer('project-element');

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
            document.getElementById('edit-date').value = task.dueDate;
            document.getElementById(`pedit${task.priority}`).checked = 'checked';
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
        initDisplay
    };
})();

export default domManager;