exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        { id: 1, score: 4, answer: 'Yesterday is history,tomorrow is a mystery,and today is a gift.That\'s why they call it present - Master Oogway' },
        { id: 2, score: 5, answer: 'Your story may not have such a happy beginning but that does not make you who you are, it is the rest of it- who you choose to be”― Soothsayer' },
        { id: 3, score: 6, answer: 'If you only do what you can do, you will never be more than who you are. ― Master Shifu' },
        { id: 4, score: 7, answer: 'Po: Maybe I should just quit and go back to making noodles.Oogway: Quit, don\'t quit? Noodles, don\'t noodles? You are too concerned about what was and what will be. There is a saying: yesterday is history, tomorrow is a mystery, but today is a gift.That is why it is called the present.' },
        { id: 5, score: 8, answer: 'Oogway: There are no accidents.Shifu: [sighs] Yes, I know. You\'ve already said that twice.Oogway: That was no accident either.Shifu: Thrice.' },
        { id: 6, score: 9, answer: 'There is no secret ingredient ― Mr Ping, Po\'s father' },
        { id: 7, score: 10, answer: 'Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear' },
        { id: 8, score: 11, answer: 'There are no coincidences in this world.- The Turtle' },
        { id: 9, score: 12, answer: 'We do not wash our pits in the pool of sacred tears - Master Shifu' },
        { id: 10, score: 13, answer: 'You must let go of the illusion of control - The Turtle' },
        { id: 11, score: 14, answer: 'Legend tells of a legendary warrior whose kung fu skills were the stuff of legend.' },
        { id: 12, score: 15, answer: 'You must believe! - The Turtle' },
        { id: 13, score: 16, answer: 'If you only do what you can do, you will never be more than you are now.― Master Oogway' }
      ])
    })
}
