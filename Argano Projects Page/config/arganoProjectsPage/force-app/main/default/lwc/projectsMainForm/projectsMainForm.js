import { LightningElement, track } from 'lwc';

export default class ProjectForm extends LightningElement {
    @track personName;
    @track projectName;
    @track description;
    @track githubLink;
    @track imageUrl;
    @track isSubmitted = false;

    handlePersonNameChange(event) {
        this.personName = event.target.value;
    }

    handleProjectNameChange(event) {
        this.projectName = event.target.value;
    }

    handleDescriptionChange(event) {
        this.description = event.target.value;
    }

    handleGithubLinkChange(event) {
        this.githubLink = event.target.value;
    }

    handleImageUrlChange(event) {
        this.imageUrl = event.target.value;
    }

    get allFieldsCompleted() {
        return !(this.personName && this.projectName && this.githubLink);
    }

    submitHandler(event) {
        event.preventDefault();
        this.isSubmitted = true;
        this.saveForm();
    }

    resetHandler() {
        this.personName = '';
        this.projectName = '';
        this.description = '';
        this.githubLink = '';
        this.imageUrl = '';
        this.isSubmitted = false;
    }

    saveForm() {
        saveProject({ 
            personName: this.personName, 
            projectName: this.projectName,
            description: this.description,
            githubLink: this.githubLink,
            imageUrl: this.imageUrl,
        })
        .then(result => {
            console.log('You have Submitted your project correctly', result);
        })
        .catch(error => {
            console.error('There was an error', error);
        });
    }
}