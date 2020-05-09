import React from 'react';
import {HowToUsePageContainer, ImageContainer, InstructionContainer, Image, TopicContainer} from './how-to-use-page.styles';
import {WEBSITE_TEXT} from '../../assets/website-text';


const HowToUsePage = () => {

    return <HowToUsePageContainer>
        <TopicContainer>
            <ImageContainer>
                <Image src={WEBSITE_TEXT.create_account} alt="create_account" height="300" width="300"/>
            </ImageContainer>
            <InstructionContainer>
                {WEBSITE_TEXT.instruction_one}
            </InstructionContainer>
        </TopicContainer>
        <TopicContainer>
            <ImageContainer>
                <Image src={WEBSITE_TEXT.navigate_to_profile_img} alt="click_profile" height="300" width="300" />
            </ImageContainer>
            <InstructionContainer>
                {WEBSITE_TEXT.instruction_two}
            </InstructionContainer>
        </TopicContainer>
        <TopicContainer>
            <ImageContainer>
                <Image src={WEBSITE_TEXT.click_deck_button_img} alt="click_deck" height="300" width="300" />
            </ImageContainer>
            <InstructionContainer>
                {WEBSITE_TEXT.instruction_three}
            </InstructionContainer>
        </TopicContainer>
        <TopicContainer>
            <ImageContainer>
                <Image src={WEBSITE_TEXT.edit_deck_image} alt="edit_deck" height="300" width="300"/>
                <Image src={WEBSITE_TEXT.delete_deck_img} alt="delete_deck" height="300" width="300"/>
                <Image src={WEBSITE_TEXT.add_deck_img} alt="add_deck" height="300" width="300"/>
            </ImageContainer>
            <InstructionContainer>
                {WEBSITE_TEXT.instruction_four}
            </InstructionContainer>
        </TopicContainer>
        <TopicContainer>
            <ImageContainer>
                <Image src={WEBSITE_TEXT.add_deck_img} alt="create_new_deck" height="300" width="300"/>
            </ImageContainer>
            <InstructionContainer>
                {WEBSITE_TEXT.instruction_five}
            </InstructionContainer>
        </TopicContainer>
        <TopicContainer>
            <ImageContainer>
                <Image src={WEBSITE_TEXT.select_deck_img} alt="select_deck" height="300" width="300"/>
            </ImageContainer>
            <InstructionContainer>
                {WEBSITE_TEXT.instruction_six}
            </InstructionContainer>
        </TopicContainer>
        <TopicContainer>
            <ImageContainer>
                <Image src={WEBSITE_TEXT.view_card_img} alt="view_card" height="300" width="300"/>
                <Image src={WEBSITE_TEXT.add_card_img} alt="add_card" height="300" width="300"/>
                <Image src={WEBSITE_TEXT.delete_card_img} alt="delete_card" height="300" width="300"/>
            </ImageContainer>
            <InstructionContainer>
                {WEBSITE_TEXT.instruction_seven}
            </InstructionContainer>
        </TopicContainer>
        <TopicContainer>
            <ImageContainer>
                <Image   src={WEBSITE_TEXT.friend_profile_img} alt="manage-friends" height="300" width="300"/>
            </ImageContainer>
            <InstructionContainer>
                {WEBSITE_TEXT.instruction_eight}
                <p>{WEBSITE_TEXT.instruction_nine}</p>
            </InstructionContainer>
        </TopicContainer>
    </HowToUsePageContainer>  
}

export default HowToUsePage;