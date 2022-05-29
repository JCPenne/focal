const data = {
  f01: {
    name: 'Alice',
    age: 15,
    follows: ['f02', 'f03', 'f04'],
  },
  f02: {
    name: 'Bob',
    age: 20,
    follows: ['f05', 'f06'],
  },
  f03: {
    name: 'Charlie',
    age: 35,
    follows: ['f01', 'f04', 'f06'],
  },
  f04: {
    name: 'Debbie',
    age: 40,
    follows: ['f01', 'f02', 'f03', 'f05', 'f06'],
  },
  f05: {
    name: 'Elizabeth',
    age: 45,
    follows: ['f04'],
  },
  f06: {
    name: 'Finn',
    age: 25,
    follows: ['f05'],
  },
};

//Create a function that RETURNS the NAME of the individual who follows the MOST people. biggestFollower()
const biggestFollower = function (data) {
  let counter = 0;
  let name = '';
  for (person in data) {
    let followAmount = data[person]['follows'].length;
    if (followAmount > counter) {
      counter = followAmount;
      name = data[person]['name'];
    }
  }
  return name;
};
//console.log(biggestFollower(data));

//Create a function which RETURNS the NAME of the MOST FOLLOWED individual
const mostPopular = function (data) {
  let resultObj = {};
  for (person in data) {
    let name = data[person]['name'];
    resultObj[name] = {
      index: person,
      follows: 0,
    };
    for (person in data) {
      data[person]['follows'].forEach(x => {
        if (x === resultObj[name]['index']) {
          resultObj[name]['follows'] += 1;
        }
      });
    }
  }
  let counter2 = 0;
  let mostPopularPerson = '';
  for (person in resultObj) {
    if (resultObj[person]['follows'] >= counter2) {
      counter2 = resultObj[person]['follows'];
      mostPopularPerson = person;
    }
  }
  console.log(
    `The most popular person is ${mostPopularPerson} with ${counter2} followers`
  );
};
//mostPopular(data);

//old printAll function. It's contents are commented out.
const printAll = function (data) {
  //   preObj = {};
  //   for (person in data) {
  //     let name = data[person]['name'];
  //     preObj[name] = {
  //       Index: person,
  //       FollowsMeta: data[person]['follows'],
  //       followed_by: [],
  //       FollowsActual: [],
  //     };
  //     for (person in data) {
  //       let followList = data[person]['follows'];
  //       for (element of followList) {
  //         if (element === preObj[name]['Index']) {
  //           preObj[name]['Followed_By'].push(data[person]['name']);
  //         }
  //       }
  //     }
  //   }
  //   for (person in preObj) {
  //     for (followsList of preObj[person]['FollowsMeta']) {
  //       for (person2 in preObj) {
  //         if (preObj[person2]['Index'] === followsList) {
  //           preObj[person]['FollowsActual'].push(person2);
  //         }
  //       }
  //     }
  //   }
  //   const resultObj = {};
  //   for (person in preObj) {
  //     resultObj[person] = {
  //       Follows: preObj[person]['FollowsActual'],
  //       Followed_By: preObj[person]['Followed_By'],
  //     };
  //   }
  //   return resultObj;
};
//console.log(printAll(data));

//Create a function that OUTPUTS a list of EVERYONE and for each of them, who THEY FOLLOW and who FOLLOWS THEM
//New printAll2 function is below, along with it's helper functions
const createNewObj = function (data) {
  let createdObject = {};

  for (person in data) {
    let name = data[person]['name'];
    createdObject[name] = {
      follows: [],
      followed_by: [],
      not_followed_by: [],
    };
  }
  return createdObject;
};
const populateFollows = function (createdObj, data) {
  for (mutatedPerson in createdObj) {
    for (originalPerson in data) {
      let name = data[originalPerson]['name'];

      if (name === mutatedPerson) {
        for (eachFollow of data[originalPerson]['follows']) {
          for (originalPerson in data) {
            if (originalPerson === eachFollow) {
              createdObj[mutatedPerson]['follows'].push(
                data[originalPerson]['name']
              );
            }
          }
        }
      }
    }
  }
  return createdObj;
};
const populateFollowers = function (createdObj, data) {
  for (originalPerson in data) {
    let name = data[originalPerson]['name'];

    //console.log(
    //`First loop through original data checking who follows ${name}`
    //);
    for (originalPerson2 in data) {
      let name2 = data[originalPerson2]['name'];
      let followList = data[originalPerson2]['follows'];

      //console.log(
      //`Second loop through original data, checking if ${name2} follows ${name}`
      //);
      for (eachFollow of followList) {
        //console.log(
        //  `third loop checking each follow. Does ${eachFollow} = ${originalPerson}?`
        //);
        if (eachFollow === originalPerson) {
          createdObj[name]['followed_by'].push(name2);
        }
      }
    }
  }
  return createdObj;
};
const populateNonFollowers = function (createdObj, data) {
  for (originalPerson in data) {
    let name = data[originalPerson]['name'];

    //console.log(
    //`First loop through original data checking who follows ${name}`
    //);
    for (originalPerson2 in data) {
      let name2 = data[originalPerson2]['name'];
      let followList = data[originalPerson2]['follows'];

      //console.log(
      //`Second loop through original data, checking if ${name2} follows ${name}`
      //)
        if (!followList.includes(originalPerson) && originalPerson !== originalPerson2) {
          createdObj[name]['not_followed_by'].push(name2);
        }
      }
    }
  return createdObj;
};
const printAll2 = function (data) {
  const masterObj = createNewObj(data);
  const masterObj2 = populateFollows(masterObj, data);
  const masterObj3 = populateFollowers(masterObj2, data);
  const masterObj4 = populateNonFollowers(masterObj3, data);
  console.log(masterObj4);
};
printAll2(data);
//Here ends printAll2 function code block
