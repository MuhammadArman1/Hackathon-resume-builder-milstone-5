var _a, _b;
function toggleskill() {
    var toggleButton = document.getElementById("toggle-button");
    var toggleskill = document.getElementById("toggle-skill");
    if (toggleskill.style.display === 'none') {
        toggleskill.style.display = 'block';
        toggleButton.textContent = "Hide Skill";
    }
    else {
        toggleskill.style.display = 'none';
        toggleButton.textContent = "Show Skill";
    }
}
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var socialMedia = document.getElementById('socialMedia').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var achievements = document.getElementById('achievements').value;
    var languages = Array.from(document.querySelectorAll('input[name="languages"]:checked'))
        .map(function (checkbox) { return checkbox.value; })
        .join(', ');
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-phone').textContent = phone;
    document.getElementById('display-socialMedia').textContent = socialMedia;
    document.getElementById('display-education').textContent = education;
    document.getElementById('display-experience').textContent = experience;
    document.getElementById('display-skills').textContent = skills;
    document.getElementById("display-achievement").textContent = achievements;
    document.getElementById('display-languages').textContent = languages;
    document.getElementById('resume-preview').style.display = 'block';
    var resumeForm = document.getElementById("resume-form");
    var ResumePreview = document.getElementById("resume-preview");
    if (resumeForm && ResumePreview) {
        resumeForm.style.display = "none";
        ResumePreview.style.display = "block";
    }
});
function editResume() {
    var resumeForm = document.getElementById("resume-form");
    var ResumePreview = document.getElementById("resume-preview");
    if (resumeForm && ResumePreview) {
        resumeForm.style.display = 'block';
        ResumePreview.style.display = 'none';
    }
}
(_b = document.getElementById("print-resume")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var h1 = document.querySelector("h1");
    var h2 = document.querySelector("h2");
    var hiddenElements = document.getElementById("sharelink");
    if (h1) {
        h1.style.display = "none";
    }
    if (h2) {
        h2.style.display = "none";
    }
    if (hiddenElements) {
        hiddenElements.style.display = "none";
    }
    window.print();
    if (h1) {
        h1.style.display = "";
    }
    if (h2) {
        h2.style.display = "";
    }
    if (hiddenElements) {
        hiddenElements.style.display = "";
    }
});
function shareurl() {
    var url = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: url
        });
    }
    //     .then(() => console.log('Successful share'))
    //     .catch(err => console.error('Error sharing:', err));
    // } else {
    //     alert('Web Share API is not supported in your browser.');
    // }
}
