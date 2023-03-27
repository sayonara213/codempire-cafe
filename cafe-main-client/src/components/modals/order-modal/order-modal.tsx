import React, { useEffect, useState } from 'react';
import * as Styled from './order-modal.styled';
import Button from './../../global/Button/button';
import GlobalSelect from './../../global/Select/select';
import { useAppSelector } from '../../../hooks/hooks';
import GlobalDatePicker from './date-picker/date-picker';

const OrderModal: React.FC = () => {
  const addresses = useAppSelector((store) => store.user.addresses);

  const [selectedAddresses, setSelectedAddresses] = useState<any>([]);
  const [deliverNow, setDeliverNow] = useState<boolean>(true);
  const [deliverDate, setDeliverDate] = useState<Date>(new Date());
  const [comment, setComment] = useState<string>('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliverNow(e.target.value === 'deliverNow');
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const fiterAddresses = () => {
    const filteredAddresses = addresses.filter((address) => address.isActive);
    const tempAddresses = filteredAddresses.map((address) => {
      return {
        name: address.addressName,
        id: address.id,
      };
    });
    setSelectedAddresses(tempAddresses);
  };

  useEffect(() => {
    fiterAddresses();
  }, [addresses]);
  return (
    <Styled.OrderModalWrap>
      <Styled.OrderModalBody>
        <Styled.OrderSection>
          <Styled.OrderSectionTitle>Delivery</Styled.OrderSectionTitle>
          <GlobalSelect
            items={selectedAddresses}
            selectedItems={[]}
            onchange={() => console.log('')}
          />
        </Styled.OrderSection>
        <Styled.OrderSection>
          <Styled.OrderSectionTitle>Choose date and time of delivery</Styled.OrderSectionTitle>
          <Styled.RadioListWrap>
            <Styled.RadioLabel htmlFor='delivery1'>
              <Styled.RadioInput
                type='radio'
                value='deliverNow'
                id='delivery1'
                onChange={handleDateChange}
                checked={deliverNow === true}
              />
              Deliver now
            </Styled.RadioLabel>
            <Styled.RadioLabel htmlFor='delivery2'>
              <Styled.RadioInput
                type='radio'
                value='deliverLater'
                id='delivery2'
                onChange={handleDateChange}
                checked={deliverNow === false}
              />
              Deliver later
            </Styled.RadioLabel>
          </Styled.RadioListWrap>
          {deliverNow === false && (
            <Styled.DateInputWrap>
              <GlobalDatePicker date={deliverDate} setDate={setDeliverDate} />
            </Styled.DateInputWrap>
          )}
        </Styled.OrderSection>
        <Styled.OrderSection>
          <Styled.OrderSectionTitle>Add comment</Styled.OrderSectionTitle>
          <Styled.CommentInput
            placeholder='Your comment'
            value={comment}
            onChange={handleCommentChange}
          />
        </Styled.OrderSection>
      </Styled.OrderModalBody>
      <Styled.FooterButtonWrap>
        <Button type={undefined} isActive={true} isCancel={true}>
          CANCEL
        </Button>
        <Button type={undefined} isActive={true}>
          PROCEED
        </Button>
      </Styled.FooterButtonWrap>
    </Styled.OrderModalWrap>
  );
};

export default OrderModal;
