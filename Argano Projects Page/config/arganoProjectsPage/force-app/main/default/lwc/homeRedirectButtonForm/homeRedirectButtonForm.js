import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class SubmitProject extends NavigationMixin(LightningElement) {
    redirectToPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://arganotest2-dev-ed.develop.lightning.force.com/lightning/n/Project_Form'
            }
        });
    }
}
