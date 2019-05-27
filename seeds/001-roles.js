
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {id: 1, name: 'student'},
        {id: 2, name: 'PM'},
        {id: 3, name: 'TA'}
      ]);
    });
};
