import Ember from 'ember';

export default Ember.Service.extend({
  watchedList: [],

  add(question) {
    this.get('watchedList').pushObject(item);
  }
});
