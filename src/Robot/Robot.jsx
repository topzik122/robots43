import './Robot.css'

export default function Robot(){
    return (
        <li class="card">
            <img class="card__avatar" src="https://robohash.org/${this.id}?size=300x300" />
            <div class="card__description">
                <h3 class="card__name">${this.name}</h3>
                <p class="card__email">${this.email}</p>
            </div>
        </li>
    )
}
