
'use client';

import { Accordion } from 'flowbite-react';

function AccordionContainer() {
  const arr = [
    {id:1, question: "What is the difference between a 3PL and a 4PL?", answer:"simple answer simple a simple an simp"},
    {id:2, question: "What is the difference between a 3PL and a 4PL?", answer:"simple answer simple a simple an simp"},
    {id:3, question: "What is the difference between a 3PL and a 4PL?", answer:"simple answer simple a simple an simp"},
    {id:4, question: "What is the difference between a 3PL and a 4PL?", answer:"simple answer simple a simple an simp"},
    {id:5, question: "What is the difference between a 3PL and a 4PL?", answer:"simple answer simple a simple an simp"},
    {id:6, question: "What is the difference between a 3PL and a 4PL?", answer:"simple answer simple a simple an simp"},
    {id:7, question: "What is the difference between a 3PL and a 4PL?", answer:"simple answer simple a simple an simp"},
    {id:8, question: "What is the difference between a 3PL and a 4PL?", answer:"simple answer simple a simple an simp"},
    {id:9, question: "What is the difference between a 3PL and a 4PL?", answer:"simple answer simple a simple an simp"},
    {id:10, question: "What is the difference between a 3PL and a 4PL?", answer:"simple answer simple a simple an simp"}
] 
return (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
    <div>
      <Accordion>
        {arr.slice(0, 5).map((item) => (
          <Accordion.Panel key={item.id} className="border-b-8">
            <Accordion.Title>{item.question}</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">{item.answer}</p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
    <div>
      <Accordion>
        {arr.slice(5, 10).map((item) => (
          <Accordion.Panel key={item.id} className="!mb-10">
            <Accordion.Title>{item.question}</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">{item.answer}</p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  </div>
);
}

export default AccordionContainer