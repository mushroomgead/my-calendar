import styled from "styled-components";
import { getPeriodTime } from "./utils";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #fff;
  background: #2ecc70;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 1px -1px 13px -2px rgb(0 0 0 / 25%);
`;

const Row = styled.span`
  display: flex;
  flex-direction: row;
`;

const EventTime = styled.span`
  font-size: 12px;
  padding-top: 5px;
`;

const Separator = styled.span`
  &:after {
    content: "●";
    display: block;
    font-size: 7px;
    margin: 7px;
  }
`;

const EventTitle = styled.span`
  font-weight: 600;
`;

export default function EventItem({ event, selectedDate }) {
  return (
    <Card>
      <EventTitle>{event.title}</EventTitle>
      <Row>
        <EventTime>{getPeriodTime(event, selectedDate, "startDate")}</EventTime>
        <Separator />
        <EventTime>{getPeriodTime(event, selectedDate, "endDate")}</EventTime>
      </Row>
    </Card>
  );
}
