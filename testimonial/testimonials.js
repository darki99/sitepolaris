const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
  },
  {
    name: 'heinzr_',
    position: 'Administrator',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "I found Polaris to be an incredible experience, as a user and as an administrator, I love the attention and great collaboration that the owner and the other users and staff team present, I see a lot of potential in Polaris.",
  },
  {
    name: 'David',
    position: 'Support',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'It seems like an excellent server. Very well configured and very friendly, all the staff behind it, what I liked most was that the owners are always attentive to any user who has questions.',
  },
  {
    name: 'Johnny Cedeño',
    position: 'Ceo',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'Como ingeniero en sistemas y desarrollador de software he tomado la decesion de crear como proyecto polaris un diciembre del año pasado. La finalidad de todo esto es que todos puedan unirse a esta comunidad, actualmente soy desarrollador, diseñador, y estoy en constante aprendizaje de las nuevas tecnologias e imnovacion para traerles a los clientes una buena y fortida experiencia de entrega de sus pedidos en el ambito del desarrollo. ',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)