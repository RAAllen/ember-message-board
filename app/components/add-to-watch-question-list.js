import Ember from 'ember';

export default Ember.Component.extend({
  questionWatcher: Ember.inject.service('question-watcher'),
  actions: {
    addToWatchedQuestions(question) {
      this.get('questionWatcher').add(question);
    }
  }
});
