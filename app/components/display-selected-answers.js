import Ember from 'ember';

export default Ember.Component.extend({
  selectedAnswers: Ember.inject.service(),
  fullAnswer: Ember.computed('answer.answer', 'answer.author', function() {
    return this.get('answer.answer') + ' - ' + this.get('answer.author');
  })
});
