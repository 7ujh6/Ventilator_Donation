import React, {useState, useContext, useEffect, useRef} from 'react'
import Card from '../card/card.component';
import PopUpWindow from '../pop-up-window/pop-up-window.component';
import FormInput from '../form-input/form-input.component';
import DecksButton from '../decks-button/decks-button.component';
import CardButton from '../card-button/card-button.component';
import CardForm from '../card-form/card-form.component';
import {DeckContext} from '../../providers/deck/deck.provider';
import {DecksContainer, ScrollWindow, DeckCell, DisplayTagWithTooltip,
    CardCancelContainer, CancelContainer, DeckDisplay, CardCell} from './decks.styles';

const Decks = ({activeDecks, changeActiveDecks, isUser}) => {

    const {visible, popUp, toggleVisible, triggerPopUp} = useContext(DeckContext);
    const [selectedDeck, setSelectedDeck] = useState(null);
    const [cardEdited, setCardEdited] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [cardSubmission, setCardSubmission] = useState({frontText: "", backText: ""});
    const [tempSubmission, setTempSubmission] = useState({tempFront: "", tempBack: ""})
    const [stepCounter, setStepCounter] = useState(0);


    const didMount = useRef(false);
    useEffect(() => {
        
        if (didMount.current && selectedDeck && !cardEdited) {
            triggerPopUp();
        }
        else if (cardEdited) {
            setCardSubmission({ frontText: "", backText: ""});
            setTempSubmission({tempFront: "", tempBack:""});
            setCardEdited(false);
        }
        else {
            didMount.current = true;
        }
    }, [selectedDeck]); 

    useEffect(() => {
        if (didMount.current && selectedDeck) {

            if (stepCounter !== 0) {
                setStepCounter((stepCounter + 1) % 3)
            }
            

            if (stepCounter === 2) {
                const {frontText, backText} = cardSubmission;
                const {index, deck, deck:{cards}} = selectedDeck;
                setSelectedDeck({index: index, deck: {...deck, cards: [...cards, {frontText, backText}]}});
            }
        }
        else {

            didMount.current = true;
        }

    }, [cardSubmission])
    

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

    const handlePopUpOpen = event => {
        const deckToAdd = activeDecks[event.currentTarget.getAttribute('id')].deck ?
        activeDecks[event.currentTarget.getAttribute('id')].deck : activeDecks[event.currentTarget.getAttribute('id')];

        setSelectedDeck({index: event.currentTarget.getAttribute('id'), 
        deck: deckToAdd});
    }

    const handlePopUpClose = () => {
        triggerPopUp();

        const {index, deck} = selectedDeck;
        var newActiveDecks = [];
        activeDecks.map((deck) => newActiveDecks.push(deck));
        newActiveDecks[index] = deck;

        if(isUser) changeActiveDecks(newActiveDecks);
        setSelectedDeck(null);
    }

    const handleSubmission = event => {
        const {key} = event;

        if (key === 'Enter') {
        setCardEdited(true);
        const {target: {value}} = event;


        switch(stepCounter) {
            case 0: setCardSubmission ({...cardSubmission});
                break;
            case 1: 
            setCardSubmission({...cardSubmission, frontText: value});
                break;
            case 2:
            setCardSubmission({...cardSubmission, backText:value});
                break;
            default: 
                break;
        }
        
    } 
    }

    const handleChange = event => {
        const {target: {value}} = event;        

        switch(stepCounter) {
            case 1: setTempSubmission({...tempSubmission, tempFront: value})
                break;
            case 2: setTempSubmission({...tempSubmission, tempBack: value})
                break;
            default:
                break;
        }
    }

    const handleDeckUpdate = event => {
       const {id, name, value} = event.target;
       let newActiveDecks = [...activeDecks];

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
        setCardEdited(false);
        setCardSubmission({frontText: "", backText: ""})
        setTempSubmission({tempFront: "", tempBack: ""});
        setStepCounter(0);
    }
    
    const handleDeckDeletion = event => {

        const updatedActiveDecks = [];
        activeDecks.map((deck, idx) => {
            if (idx != event.currentTarget.getAttribute('id')) {
                updatedActiveDecks.push(deck);
            }
        })
    
        changeActiveDecks(updatedActiveDecks);
        
    }

    const handleCardDeletion = event => {
        setCardEdited(true);
        const updatedSelectedDeck = {cards: [], name: selectedDeck.deck.name, 
        description: selectedDeck.deck.description};

        selectedDeck.deck.cards.map((card, idx) => {
            if (idx != event.currentTarget.getAttribute('id')) {
                updatedSelectedDeck.deck.cards.push(card);
            }
        })

        setSelectedDeck({...selectedDeck, deck: updatedSelectedDeck});
    }

    const getCardElement = () => {
        switch (stepCounter) {
        
            case 0: return <div onClick={() => setStepCounter((stepCounter + 1) % 3)}><CardButton/></div>
            case 1: return <CardCell><CardForm frontSide={true} tempFront={tempSubmission.tempFront} handleChange={handleChange} handleSubmission={handleSubmission}/>
            <CardCancelContainer style={{top: "-130px"}} onClick={handleCancel}>&#120299;</CardCancelContainer></CardCell>
            case 2: return <CardCell><CardForm frontSide={false} tempBack={tempSubmission.tempBack} handleChange={handleChange} handleSubmission={handleSubmission}/>
            <CardCancelContainer style={{top: "-130px"}} onClick={handleCancel}>&#120299;</CardCancelContainer></CardCell>
            default:
                break;
        }
    }

    // console.log(cardEdited);
    // console.log(selectedDeck);
    //console.log(stepCounter);

    
    return <DecksContainer>
        <div style={{cursor: "pointer", position: "absolute", left: "20px", width: "90px", height: "55px"}} onClick={() => {if (popUp) triggerPopUp()
            toggleVisible()}}><DecksButton/></div>
        {
           popUp ? <PopUpWindow handlePopUpClose={handlePopUpClose} isCardPopUp>
                        {
                            selectedDeck.deck.cards.map((card, idx) => <>
                                <Card id={idx} card={card}/>
                                <CardCancelContainer style={{left: "0px"}} id={idx} onClick={handleCardDeletion}>&#120299;</CardCancelContainer>
                            </>)
                        }
                        {
                                isUser ? getCardElement() : null
                        }
                    
                    </PopUpWindow>
           : visible ? <ScrollWindow>
                    <FormInput style={{position: "relative", left:"20%", width: "60%"}} type='search' placeholder="search" value={searchText}
                        onChange={handleSearchChange} onSubmit={null}/> 
                    <DeckDisplay>
                        {
                            activeDecks.map((deck, idx) => <DeckCell key={idx}>
                                    <div id={idx} style={{cursor:"pointer", position: "relative", height: "55px", width: "95px", left: "30px"}} onClick={handlePopUpOpen}>
                                    <DecksButton isAdd={true} noPlus={true}/>
                                    </div>
                                    <DisplayTagWithTooltip name="name">
                                        {deck.name ? deck.name : `Deck ${idx}`}
                                        <span name="description">{deck.description ? deck.description : 'Add A Description'}</span>
                                    </DisplayTagWithTooltip>
                                    <CancelContainer id={idx} onClick={handleDeckDeletion}>&#120299;</CancelContainer>
                                </DeckCell>
                            )
                        }
                    {isUser ? <div onClick={handleDeckUpdate}><DecksButton isAdd={true} /></div> : null}
                </DeckDisplay>
            </ScrollWindow> 
            : null
        }
    </DecksContainer>
}

export default Decks;