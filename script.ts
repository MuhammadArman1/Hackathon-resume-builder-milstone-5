function toggleskill(){
    const toggleButton = document.getElementById("toggle-button") as HTMLButtonElement
    const toggleskill = document.getElementById("toggle-skill") as HTMLElement
    
        if (toggleskill.style.display === 'none') {
            toggleskill.style.display = 'block';
            toggleButton.textContent = "Hide Skill"
        } else {
            toggleskill.style.display = 'none';
            toggleButton.textContent = "Show Skill"

        }
        }
    
document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const socialMedia = (document.getElementById('socialMedia') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const achievements = (document.getElementById('achievements') as HTMLInputElement).value;

    const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked'))
        .map(checkbox => (checkbox as HTMLInputElement).value)
        .join(', ');

    document.getElementById('display-name')!.textContent = name;
    document.getElementById('display-email')!.textContent = email;
    document.getElementById('display-phone')!.textContent = phone;
    document.getElementById('display-socialMedia')!.textContent = socialMedia;
    document.getElementById('display-education')!.textContent = education;
    document.getElementById('display-experience')!.textContent = experience;
    document.getElementById('display-skills')!.textContent = skills;
    document.getElementById("display-achievement")!.textContent = achievements;
    document.getElementById('display-languages')!.textContent = languages;
    document.getElementById('resume-preview')!.style.display = 'block';

    const resumeForm = document.getElementById("resume-form")
    const ResumePreview = document.getElementById("resume-preview") 


    if(resumeForm && ResumePreview){
        resumeForm.style.display = "none";
        ResumePreview.style.display = "block";
    }
});

function editResume(): void {
    const resumeForm = document.getElementById("resume-form")
    const ResumePreview = document.getElementById("resume-preview") 
    if (resumeForm && ResumePreview) {
        resumeForm.style.display = 'block';
        ResumePreview.style.display = 'none';
    }
}

document.getElementById("print-resume")?.addEventListener("click", function(){
   window.print()
});

function shareurl() {
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: 'Check this out!',
            url: url
        })
        .then(() => console.log('Successful share'))
        .catch(err => console.error('Error sharing:', err));
    } else {
        alert('Web Share API is not supported in your browser.');
    }
}