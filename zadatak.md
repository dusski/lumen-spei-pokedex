Opis:
Aplikacija je jednostavni pokedex. Korisnik mora da se registruje/loginuje da bi pristupio listi pokemona.
Kada klikne na nekog pokemona iz liste otvori se nova strana koriscenjem nekog routinga gde se vide vise informacije o izabranom pokemonu.

Dizajn aplikacije nije bitan samo treba da bude pregledno. Moze da se koristi css framework po zelji.

API endpointi koji treba da se koriste:

 - Za listu https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0
 - Za pokemona https://pokeapi.co/api/v2/pokemon/{pokemon_name}
 - Slika pokemona  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemon_id}
 - Dokumentacija https://pokeapi.co/docs/v2

Login/Register

Multistep forma gde koristnik mora da popuni 3 koraka da bi se login.
Pojavljuje se ako korisnik nije logged in.
Podaci iz forme treba da se sacuvaju.
Forma sadrzi:
	Ekran 1:
		Ime
		Prezime
		email
		dugme next
	Ekran 2:
	password
	confirm password
	Dugme next
	Ekran 3:
	checkbox: Accept terms of service
	i dugme finsih

** Password poljatreba da sadrze validaciju da je unesen isti text, i sva polja moraju biti popunjena.
	Ne sme da se ode na sledecu stranicu ako nije popunjeno svako polje.

Navbar:
Prikazuje se ime korisnika koje je uneo tokom logina.
Dugme za logout koje je prisutno nezavisno od strane sem login/register.


Lista pokemona:

Lista sadrzi paginaciju i na stranici se vide po 50 pokemona.
Elementi liste sadrze sliku pokemona i ime pokemona.

Detalji o pokemonu:

Kada se kliknena neki element iz liste otvara se stranica sa nekim detaljima pokemona.
Ovo se radi routingom (url treba da sadrzi nesto kao pokemon/pokemon_name)
Strana sadrzi dugme back.

Bonus:

	Search polje za pretrazivanje liste. Trazi se po imenu pokemona.

	Kreirati github repo i poslati link na ovaj email.

	Aplikacija treba da se skalira na mobile i na desktop.
