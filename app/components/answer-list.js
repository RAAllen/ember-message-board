import Ember from 'ember';

export default Ember.Component.extend({
  fullAnswer: Ember.computed('answer.answer', 'answer.author', function() {
    return this.get('answer.answer') + ' - ' + this.get('answer.author');
  }),
  actions: {
    delete(answer) {
      if(confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
