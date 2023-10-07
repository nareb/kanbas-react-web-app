<script>
    function showEditScreen(element) {
        // Hide all assignments' details
        const assignments = document.querySelectorAll('.list-group-item');
        assignments.forEach(assignment => {
            if (assignment.nextElementSibling) {
                assignment.nextElementSibling.style.display = 'none';
            }
        });

        // Display the Edit Assignment screen
        const editScreen = document.getElementById('edit-assignment-screen');
        editScreen.style.display = 'block';

        // Set the breadcrumb's assignment name from the clicked assignment
        const assignmentName = element.getAttribute('data-assignment-name');
        document.getElementById('breadcrumb-assignment-name').textContent = assignmentName;
        document.getElementById('assignmentName').value = assignmentName;
    }

    function hideEditScreen() {
        // Hide the Edit Assignment screen
        const editScreen = document.getElementById('edit-assignment-screen');
        editScreen.style.display = 'none';

        // Optionally: Show all assignments' details again
        const assignments = document.querySelectorAll('.list-group-item');
        assignments.forEach(assignment => {
            if (assignment.nextElementSibling) {
                assignment.nextElementSibling.style.display = 'block';
            }
        });
    }

    function saveAssignment() {
        // Implement your saving logic here
        alert('Assignment saved!');  // Just a placeholder for demonstration
        hideEditScreen();  // Hide the edit screen once saved
    }
</script>