import { LightningElement, track } from 'lwc';

    export default class YourComponent extends LightningElement {
        @track projectName = '';
        @track description = '';
        @track githubLink = '';
        @track imageUrl = '';
        @track isSubmitted = false;

        get isSubmitButtonDisabled() {
            return !(this.projectName && this.description && this.githubLink && this.imageUrl);
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

        submitHandler(event) {
            event.preventDefault();
            if (this.isSubmitButtonDisabled) {
                return;
            }
            this.isSubmitted = true;
        }

        resetHandler() {
            this.projectName = '';
            this.description = '';
            this.githubLink = '';
            this.imageUrl = '';
            this.isSubmitted = false;
        }
    }