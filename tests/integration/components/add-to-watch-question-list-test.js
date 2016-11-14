import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-to-watch-question-list', 'Integration | Component | add to watch question list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{add-to-watch-question-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#add-to-watch-question-list}}
      template block text
    {{/add-to-watch-question-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
