import React from 'react';

export default function Checkbox({checkbox:{id, title, state}, onClick}) {
    return (
        <div className={`list-item ${state}`}>
        {/* // <div className="list-item"> */}
        {/* <div> */}
            {/* <input type="checkbox" /> */}
            {/* <label className="checkbox">
                <input
                 type="checkbox"
                 defaultChecked={state === 'checked'}
                 name="default" /> Blue</label> */}
                 <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'Checked'}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => {}}
          id={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
        />
      </label>
            {/* <input type="checkbox" value={title} readOnly={true} /> */}
        </div>
    );
}