import Ember from 'ember';

export default Ember.Service.extend({
  watchedQuestions: [],

  add(question) {
    this.get('watchedQuestions').pushObject(question);
  }
});
