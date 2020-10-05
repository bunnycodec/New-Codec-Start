const fullPage = document.querySelector('.code-container')
const header = document.querySelector('main div h1')
const author = document.querySelector('.sunnyKumar a')

const theme1 = document.querySelector('.theme1')
const theme2 = document.querySelector('.theme2')
const theme3 = document.querySelector('.theme3')
const theme4 = document.querySelector('.theme4')
const theme5 = document.querySelector('.theme5')
const theme6 = document.querySelector('.theme6')
const theme7 = document.querySelector('.theme7')
const theme8 = document.querySelector('.theme8')
const theme9 = document.querySelector('.theme9')
const theme10 = document.querySelector('.theme10')

theme1.addEventListener('click', () => {
  fullPage.style.backgroundImage = 'linear-gradient(114.2deg, rgba(121, 194, 243, 1) 22.6%, rgba(255, 180, 239, 1) 67.7%)'
  header.style.backgroundImage = 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'
  author.style.backgroundImage = 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'
})

theme2.addEventListener('click', () => {
  fullPage.style.backgroundImage = 'linear-gradient(109.6deg, rgba(48, 207, 208, 1) 11.2%, rgba(51, 8, 103, 1) 92.5%)'
  header.style.backgroundImage = 'linear-gradient(109.6deg, rgba(231, 120, 120, 1) 11.2%, rgba(246, 220, 111, 1) 91.2%)'
  author.style.backgroundImage = 'linear-gradient(109.6deg, rgba(231, 120, 120, 1) 11.2%, rgba(246, 220, 111, 1) 91.2%)'
})

theme3.addEventListener('click', () => {
  fullPage.style.backgroundImage = 'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147)'
  header.style.backgroundImage = 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )'
  author.style.backgroundImage = 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )'
})

theme4.addEventListener('click', () => {
  fullPage.style.backgroundImage = 'linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))'
  header.style.backgroundImage = 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,107,141,1) 0%, rgba(0,69,91,1) 90% )'
  author.style.backgroundImage = 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,107,141,1) 0%, rgba(0,69,91,1) 90% )'
})

theme5.addEventListener('click', () => {
  fullPage.style.backgroundImage = 'linear-gradient(109.6deg, rgba(5, 84, 94, 1) 16%, #bbb 91.1%)'
  header.style.backgroundImage = 'linear-gradient( 109.6deg,  rgba(255,194,48,1) 11.2%, rgba(255,124,0,1) 100.2% )'
  author.style.backgroundImage = 'linear-gradient( 109.6deg,  rgba(255,194,48,1) 11.2%, rgba(255,124,0,1) 100.2% )'
})

theme6.addEventListener('click', () => {
  fullPage.style.backgroundImage = 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
  header.style.backgroundImage = 'radial-gradient(circle 929px at 0.6% 1.3%, rgba(248, 251, 10, 1) 0%, rgba(248, 47, 47, 1) 82.6%)'
  author.style.backgroundImage = 'radial-gradient(circle 929px at 0.6% 1.3%, rgba(248, 251, 10, 1) 0%, rgba(248, 47, 47, 1) 82.6%)'
})

theme7.addEventListener('click', () => {
  fullPage.style.backgroundImage = 'radial-gradient(circle farthest-corner at 10% 20%, rgba(255, 229, 168, 1) 0%, rgba(251, 174, 222, 1) 100.7%)'
  header.style.backgroundImage = 'linear-gradient(to top, #30cfd0 0%, #330867 100%)'
  author.style.backgroundImage = 'linear-gradient(to top, #30cfd0 0%, #330867 100%)'
})

theme8.addEventListener('click', () => {
  fullPage.style.backgroundImage = 'radial-gradient(circle 929px at 0.6% 1.3%, rgba(248, 251, 10, 1) 0%, rgba(248, 47, 47, 1) 82.6%)'
  header.style.backgroundImage = 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)'
  author.style.backgroundImage = 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)'
})

theme9.addEventListener('click', () => {
  fullPage.style.backgroundImage = 'linear-gradient(111.1deg, rgba(0, 40, 70, 1) -4.8%, rgba(255, 115, 115, 1) 82.7%, rgba(255, 175, 123, 1) 97.2%)'
  header.style.backgroundImage = 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
  author.style.backgroundImage = 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
})

theme10.addEventListener('click', () => {
  fullPage.style.backgroundImage = 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)'
  header.style.backgroundImage = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  author.style.backgroundImage = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
})