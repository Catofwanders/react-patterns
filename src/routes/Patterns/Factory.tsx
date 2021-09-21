import PageLayout from 'layouts/PageLayout';
import React from 'react';

interface AnimalProps {
  name: string;
  sound?: string;
}

const Cat = ({ name }: AnimalProps) => {
  const [state] = React.useState<AnimalProps>({
    name,
    sound: 'Meow',
  });
  return state;
};

const Dog = ({ name }: AnimalProps) => {
  const [state] = React.useState<AnimalProps>({
    name,
    sound: 'Rawr',
  });
  return state;
};

interface AnimalFactoryProps extends AnimalProps {
  animalType: 'cat' | 'dog';
}

const AnimalFactory = (options: AnimalFactoryProps) => {
  const { animalType, ...restProps } = options;
  let animalConstructor;
  switch (animalType) {
    case 'cat':
      animalConstructor = Cat;
      break;
    case 'dog':
      animalConstructor = Dog;
      break;
    default:
      animalConstructor = Cat;
      break;
  }
  return animalConstructor(restProps);
};

const FactoryPage = () => {
  const cat1 = AnimalFactory({ animalType: 'cat', name: 'Vasia' });
  const dog1 = AnimalFactory({ animalType: 'dog', name: 'Sharik' });
  console.log({ cat1, dog1 });
  return <PageLayout title="Factory pattern"></PageLayout>;
};

export default FactoryPage;
