import React, {useState, useContext} from 'react'
import Card from '../card/card.component';
import PopUpWindow from '../pop-up-window/pop-up-window.component';
import FormInput from '../form-input/form-input.component';
import DecksButton from '../decks-button/decks-button.component';
import CardButton from '../card-button/card-button.component';
import CardForm from '../card-form/card-form.component';
import {DeckContext} from '../../providers/deck/deck.provider';
import {DecksContainer, ScrollWindow, DeckCell, DisplayTagWithTooltip,
     HeaderButtonsContainer, CancelContainer, DeckDisplay} from './decks.styles';

const Decks = ({activeDecks, changeActiveDecks, isUser}) => {

    const {visible, toggleVisible} = useContext(DeckContext);
    const [selectedDeck, setSelectedDeck] = useState(null);
    const [popUp, triggerPopUp] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [frontSide, flipSides] = useState(true);
    const [cardSubmission, setCardSubmission] = useState({frontText: "", backText: "", tempFront: "",
         tempBack: "", stepNumber: 0})

    const handleSearch = event => {
        setSearchText(event.target.value);

        //I think the filtering should be handled with onSubmit --> The data that we have to filter through could be large
        //and doing a filter on every keystroke is probably inefficient at best

        //const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        //<CardList monsters = {filteredMonsters}/> 
    }

    const handleSearchChange = event => {
        const {value} = event.target;
        setSearchText(value)
    }

    const handleFlip = () => {
        flipSides(!frontSide);
    }

    const handlePopUpOpen = event => {
        const {id} = event.target;
        console.log(event.target);
        console.log("I am being called", "ID: ", id);
        setSelectedDeck({index: id, deck: activeDecks[id]});
        triggerPopUp(!popUp);
    }

    const handlePopUpClose = () => {
        const {index, deck} = selectedDeck;
        let newActiveDecks = activeDecks;
        newActiveDecks[index] = deck;

        triggerPopUp(!popUp);
        if(isUser) changeActiveDecks(newActiveDecks);
        setSelectedDeck(null);
    }
    
    const handleSubmission = event => {
        const {id, value} = event.target;
        switch(id) {
            case 1: setCardSubmission({frontText: value})
                break;
            case 2: setCardSubmission({backText: value})
                break;
            default: 
                break;
        }

        if (id === 2) {
            const {frontText, backText} = cardSubmission;
            const {index, deck} = selectedDeck;

            setSelectedDeck({index: index, deck: [...deck, {frontText, backText}]})
            setCardSubmission({...cardSubmission, frontText: "", backText: "", tempFront: "", tempBack:""})
        }

        setCardSubmission({stepNumber: (cardSubmission.stepNumber + 1) % 3 })
    }

    const handleChange = event => {
        const {id, value} = event.target;
        switch(id) {
            case 1: setCardSubmission({tempFront: value})
                break;
            case 2: setCardSubmission({tempBack: value})
                break;
            default:
                break;
        }
    }

    const handleDeckUpdate = event => {
       const {id, name, value} = event.target;
       let newActiveDecks = activeDecks;

       if(!name) {
        newActiveDecks.push({deck: {name: "", description: "", cards: []}});
        changeActiveDecks(newActiveDecks); 
    } 
       else {
            const truncatedValue = value.substring(0, Math.min(value.length, 100));
            newActiveDecks[id] = {[name] : truncatedValue};
            changeActiveDecks(newActiveDecks);
        }          
    }

    const handleCancel = () => {
        setCardSubmission({frontText: "", backText: "", tempFront: "",
         tempBack: "", stepNumber: 0})
    }
    
    const handleDeckDeletion = event => {
        const {index} = event.target;
        changeActiveDecks(activeDecks.splice(index, 1));
        
    }

    const handleCardDeletion = event => {
        const {index} = event.target;
        setSelectedDeck({...selectedDeck, deck: selectedDeck.deck.splice(index, 1)});
    }

    const getCardElement = number => {
        switch (number) {

            case 0: return <CardButton id={number} onClick={handleSubmission}/>
            case 1: return <><CancelContainer onClick={handleCancel}>&#120299;</CancelContainer><CardForm id={number} value={cardSubmission.tempFront}
                onChange={handleChange} onSubmit={handleSubmission}/></>
            case 2: return <><CardForm id={number} value={cardSubmission.tempBack}
                onChange={handleChange} onSubmit={handleSubmission}/></>
            default:
                break;
        }
    }

    //TODO because the deck button is being rendered inside the deck cell which is 
    //tied to handlePopUpOpen the popUp is being opened while simultaneously 
    //appending a new deck
    
    return <DecksContainer><div style={{position: "absolute", left: "20px", width: "90px", height: "55px"}} onClick={toggleVisible}><DecksButton/></div>
        {visible ? <ScrollWindow><FormInput style={{position: "relative", left:"20%", width: "60%"}} type='search' placeholder="search" value={searchText} onChange={handleSearchChange} onSubmit={null}/> 
        {popUp ? <PopUpWindow isCardPopUp><HeaderButtonsContainer><span onClick={handlePopUpClose}>&#120299;</span></HeaderButtonsContainer>
            {console.log(selectedDeck)}
            {selectedDeck.deck.cards.map((card, idx) => <><Card id={idx} onClick={handleFlip} card = {card} frontSide = {frontSide}/><CancelContainer onClick={handleCardDeletion}>&#120299;</CancelContainer></>)}
            {isUser ? getCardElement() : null}
        </PopUpWindow> : null}<DeckDisplay>
         {activeDecks.map((deck, idx) => <DeckCell key={idx} ><div id={idx} style={{cursor:"pointer", position: "relative", height: "55px", width: "95px", left: "30px"}} onClick={handlePopUpOpen}><DecksButton isAdd={true} noPlus={true}/></div><DisplayTagWithTooltip name="name">{deck.name ? deck.name : `Deck ${idx}`}<span name="description">{deck.description ? deck.description : 'Add A Description'}</span></DisplayTagWithTooltip><CancelContainer index={idx} onClick={handleDeckDeletion}>&#120299;</CancelContainer></DeckCell>)}        {isUser ? <div onClick={handleDeckUpdate}><DecksButton  isAdd={true} /></div> : null}
        </DeckDisplay></ScrollWindow> : null}
        </DecksContainer>
}

export default Decks;