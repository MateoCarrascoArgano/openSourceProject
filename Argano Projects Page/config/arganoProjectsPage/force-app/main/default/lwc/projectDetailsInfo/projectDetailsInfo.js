import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class ProjectDisplay extends NavigationMixin(LightningElement) {
    @api projectTitle = 'Argano Project';
    @api projectImage = 'https://media.licdn.com/dms/image/C560BAQFDLu4qU6TvMA/company-logo_200_200/0/1661965356082/wearearganouv_logo?e=2147483647&v=beta&t=l0tMDooFipKD35y21R6eOa7PVRvcKajuj1vRlePoXng';
    @api projectDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu magna sodales, rutrum dolor vitae, hendrerit ex. Morbi mauris massa, molestie at lobortis id, efficitur tincidunt nibh. Sed congue velit id pulvinar congue. Maecenas iaculis bibendum diam. Vivamus lobortis orci eu metus suscipit, porta egestas mi ornare. Mauris non molestie mi. Nulla lobortis turpis in sem facilisis semper. Quisque pretium odio suscipit, sollicitudin orci vel, rutrum dui. Nam vehicula dignissim ante, in rutrum erat.';
    @api linkUrl = 'https://arganotest2-dev-ed.develop.lightning.force.com/lightning/n/Detail_Page';
    @track showDetailsButton = true;

    get truncatedDescription() {
        const truncated = this.projectDescription.substring(0, 200);
        return truncated.length < this.projectDescription.length ? truncated + '...' : truncated;
    }

    get showTruncateButton() {
        return this.projectDescription.length > 200;
    }

    redirectToDetails() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: this.linkUrl
            }
        });
    }
}
