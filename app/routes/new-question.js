import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    getData() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        details: this.get('details'),
      };
      this.sendAction('getData', params);
    },
    saveQuestion() {
      var newQuestion = {
        this.store.createRecord('question', params);
        newQuestion.save();
        this.transitionTo('index');
      }
    }
  }
});
