import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        details: this.get('details')
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
