import * as Styled from "./TimeEntry.styled";

function TimeEntries() {

    return(<Styled.TimeEntryBox>
        
        <>
        <p>Test</p>
        <Styled.TimeEntry>
            <p>Port of Rotterdam</p>
            <p>09:00 - 18:00</p>
        </Styled.TimeEntry>
        <Styled.TimeEntry>
            <p>Port of Rotterdam</p>
            <p>09:00 - 18:00</p>
        </Styled.TimeEntry>
        </>

        <>
        <p>Test</p>
        <Styled.TimeEntry>
            <p>Port of Rotterdam</p>
            <p>09:00 - 18:00</p>
        </Styled.TimeEntry>
        </>

        </Styled.TimeEntryBox>
    );

}

export default TimeEntries;