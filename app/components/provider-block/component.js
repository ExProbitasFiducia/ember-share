import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Component.extend({
    favicon: Ember.computed(function() {
        return ENV.apiBaseUrl + '/static/' + this.get('source').provider_name + '/img/favicon.ico';
    })
});
