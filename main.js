/** @format */

const linksSocialMedia = {
	github: "ritalisboar",
	youtube: "UCdrdtgH4x-7iwYP0iL-cEHg",
	facebook: "lisboarita",
	instagram: "ritalisboa",
	twitter: "_ritali"
}

function changeSocialMediaLinks() {
	for (let li of socialLinks.children) {
		const social = li.getAttribute("class")

		li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
	}
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
	const url = `https://api.github.com/users/${linksSocialMedia.github}`

	fetch(url)
		.then(response => response.json())
		.then(data => {
			userName.textContent = data.name
			userBio.textContent = data.bio
			userGitHub.href = data.html_url
			userImage.src = data.avatar_url
			userLogin.textContent = data.login
		})
}

getGitHubProfileInfos()

/* arrow function (=>) é a forma contraída de uma função 
function nomeDaFuncao(argumentos) {
  codigocodigocodigo
}*/
