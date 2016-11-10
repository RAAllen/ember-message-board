import Ember from 'ember';

export default Ember.Service.extend({
  selectedAnswers: [],

  add(answer) {
    this.get('selectedAnswers').pushObject(answer);
  }
});
