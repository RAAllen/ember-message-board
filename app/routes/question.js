import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    update(question) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        details: this.get('details')
      };
      this.sendAction('update', question, params);
    }
  }
});
