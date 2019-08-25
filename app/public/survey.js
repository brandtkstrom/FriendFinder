document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button#submit').addEventListener('click', evt => {
        evt.preventDefault();

        // Validate name and photo entered
        const name = document.querySelector('#input-name').value.trim();
        const photo = document.querySelector('#input-photo').value.trim();

        if (name === '') {
            alert('You must enter your name.');
            return;
        } else if (photo === '') {
            alert('You must provide a photo link.');
            return;
        }

        // Validate all questions answered
        const selectElems = document.querySelectorAll('select.custom-select');
        const options = Array.from(selectElems);
        const missing = options.find(
            option => !option.value || option.value === ''
        );
        if (missing) {
            alert('You must answer all questions.');
            return;
        }

        // Submit new Friend info
        const scores = options.map(option => parseInt(option.value));
        const postData = {
            name: name,
            photo: photo,
            scores: scores
        };

        fetch('/api/friends', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async res => {
                // No match found...
                if (res.status === 404) {
                    $('#match-name').text('No compatible match found.');
                    $('#match-photo').hide();
                } else {
                    const data = await res.json();

                    $('#match-name').text(data.name);
                    $('#match-photo').attr('src', data.photo);
                }

                // Display modal with match
                document.querySelector('#survey').reset();

                $('#friend-modal').modal();
            })
            .catch(err => {
                console.log(`ERROR: ${err}`);
                alert('An error occurred. Please try again.');
            });
    });
});
