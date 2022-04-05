(function () {
  const setFormElement = function (formElements, el, value) {
    formElements[el].value = value;
    formElements[el].focus();
    
    console.log(`Set input ${el} = ${value}`);
  };

  const clickElement = function (selector) {
    document.querySelector(selector).click();
    console.log(`Clicked ${selector}`);
  };

  fetch(
    "https://namey.muffinlabs.com/name.json?count=1&with_surname=true&frequency=all"
  )
    .then((response) => response.json())
    .then((data) => {
      const formElements = document.getElementById("new_user").elements;
      const [firstname, lastname] = data[0].split(" ");
      const hash = Math.floor(Math.random() * 1000000);
      const username = `${firstname.slice(
        0,
        1
      )}${lastname}+${hash}@example.com`.toLowerCase();

      setFormElement(formElements, "spree_user[first_name]", firstname);
      setFormElement(formElements, "spree_user[last_name]", lastname);
      setFormElement(formElements, "spree_user[email]", username);
      setFormElement(formElements, "user[confirm_email]", username);
      setFormElement(formElements, "spree_user[password]", username);

      clickElement("input[data-test=tac-checkbox]");
    });
})();
