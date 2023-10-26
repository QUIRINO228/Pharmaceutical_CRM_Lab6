document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('.log_form');
    const userTableBody = document.querySelector('#userTable tbody');


    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const genderRadios = document.querySelectorAll('input[name="gender"]');
        const firstName = document.getElementById('firstName').value;
        const secondName = document.getElementById('secondName').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const birthday = document.getElementById('birthday').value;
        const group = document.getElementById('group').value;
        const file = document.getElementById('file').value;
        const fileLabel = document.getElementById('fileLabel')

        let selectedGender;

        genderRadios.forEach(radio => {
            if (radio.checked) {
                selectedGender = radio.value;
            }
        });
        fileLabel.innerHTML = "Upload file";

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="table_radio">${firstName}</td>
            <td class="table_radio">${secondName}</td>
            <td class="table_radio">${surname}</td>
            <td class="table_radio">${email}</td>
            <td class="table_radio">${phone}</td>
            <td class="table_radio">${selectedGender}</td>
            <td class="table_radio">${birthday}</td>
            <td class="table_radio">${group}</td>
            <td class="table_radio">${file}</td>
            <td class="table_radio"><input type="checkbox" class="table_radio"></td>
        `;
        userTableBody.appendChild(row);

        signUpForm.reset()

    });

    document.getElementById('delete').addEventListener('click', function (event) {
        const radioButtons = document.querySelectorAll('input[type="checkbox"]');
        event.preventDefault();
        radioButtons.forEach(radio => {
            if (radio.checked) {
                const row = radio.closest('tr');
                if (row) {
                    row.remove();
                }
            }
        });
    });

    document.getElementById('double').addEventListener('click', function (event) {
        event.preventDefault();
        const radioButtons = document.querySelectorAll('input[type="checkbox"]');

        radioButtons.forEach(radio => {
            if (radio.checked) {
                const row = radio.closest('tr');
                radio.checked = !radio.checked
                const clonedRow = row.cloneNode(true);
                userTableBody.appendChild(clonedRow);
            }
        });
    });


});

