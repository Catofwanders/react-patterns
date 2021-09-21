import React from 'react';

import PageLayout from 'layouts/PageLayout';

interface PersonProps {
  name: string;
  age: number;
  favFood: string;
}
const Person = ({ name, age, favFood }: PersonProps) => {
  const [state] = React.useState<PersonProps>({
    name,
    age,
    favFood,
  });

  const getPersonGreat = () => {
    return `Hi ${state.name}!`;
  };

  return {
    state,
    getPersonGreat,
  };
};

const ConstructorPage = () => {
  const person1 = Person({ name: 'Name', age: 14, favFood: 'Chicken' });
  const person2 = Person({ name: 'Name2', age: 50, favFood: 'Dog' });
  console.log(person1.state, person1.getPersonGreat());
  console.log(person2.state, person2.getPersonGreat());
  return <PageLayout title="Constructor pattern"></PageLayout>;
};

export default ConstructorPage;
