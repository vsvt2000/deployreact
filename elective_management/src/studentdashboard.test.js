import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './Studentdashboard';
    describe('Student Dashboard component tests', ()=> {
        const wrapper = shallow(<LoginForm />);

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button1')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#Button1').text()))).toMatch("\u00a0 \u00a0 Apply");
        });

        it('should have a btn component', ()=> {
            //There should be only one button
            expect(wrapper.find('button#Button2')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#Button2').text()))).toMatch("\u00a0 \u00a0 Change");
        });

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#Button3')).toHaveLength(1);


            //Button should have matching text
            expect(JSON.parse(JSON.stringify(wrapper.find('button#Button3').text()))).toMatch("\u00a0 \u00a0 Feedback");
        });
    });

















    