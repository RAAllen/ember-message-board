import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    showAddNewAnswer() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        answer: this.get('answer'),
        author: this.get('author')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
