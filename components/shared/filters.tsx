'use client';

import React from 'react';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { RangeSlider } from './range-slider';
import { Title } from './title';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-6 font-bold"/>
      
      <CheckboxFiltersGroup
        title="Riided"
        className="mb-5"
        items={[
          { text: 'Kooliriided', value: 'kooliriided' },
          { text: 'Beebiriided', value: 'beebiriided' },
          { text: 'Tüdrukud', value: 'tüdrukud' },
          { text: 'Poisid', value: 'poisid' },
          { text: 'Pidulikud Kleidid', value: 'pidulikud-kleidid' }
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Hind kuni</p>
        <div className="flex gap-4">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
          />
          <Input
            type="number"
            min={10}
            max={5000}
            placeholder="1000"
          />
        </div>
        <div className="mt-4">
          <RangeSlider
            min={0}
            max={1000}
            step={1}
          />
        </div>
      </div>

      <CheckboxFiltersGroup
        title="Suurus"
        className="mb-5"
        items={[
          { text: 'Beebiriided', value: 'bee' },
          { text: 'Lapsed', value: 'laps' },
          { text: 'Poisid', value: 'pois' }
        ]}
      />
    </div>
  );
};