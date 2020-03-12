alert("We're really sorry to inform you that due to concerns around the coronavirus (COVID-19), and in accordance with health guidance from WHO, and other health authorities, we have decided to postpone SheHacks DTU to a later date. We are overwhelmed by your response and look forward to host you soon, until then stay safe and keep hacking!");

document.addEventListener('DOMContentLoaded', function () {
    let devfolioOptions = {
        buttonSelector: '#devfolio-apply-now',
        key: 'shehacks-dtu',
    }

    let script = document.createElement('script');
    script.src = "https://apply.devfolio.co";
    document.head.append(script);

    script.onload = function () {
        new Devfolio(devfolioOptions);
    }

    script.onerror = function () {
        document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
            window.location.href = 'https://devfolio.co/external-apply/' + devfolioOptions.key;
        });
    }
});
