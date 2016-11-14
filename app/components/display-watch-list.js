import Ember from 'ember';

export default Ember.Component.extend({
  watchedList: Ember.inject.service('watched-list')
});
