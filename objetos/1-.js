const name = "Nico";
const subscribers = 250000;

const createObject = (name, subs) => {
  const objetoDeseado = {
    nombre: name,
    subscribers: subs,
    hash: function () {
      return name.length * subs;
    },
    getStatus: function () {
      return `El canal de ${this.nombre} tiene ${this.subscribers}.`;
    },
  };

  return objetoDeseado;
};

const statsMiCanal = createObject(name, subscribers);

console.log(statsMiCanal.hash());
console.log(statsMiCanal.getStatus());
