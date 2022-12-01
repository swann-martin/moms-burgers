import React from 'react';
const AddressMap = () => {
  return (
    <div className="open-map">
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=4.376549720764161%2C50.861410250483665%2C4.383362531661988%2C50.86449480518757&amp;layer=mapnik&amp;marker=50.86295255334385%2C4.379956126213074"
        width="100%"
        height="80%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        style={{ border: '1px solid black' }}
      />
    </div>
  );
};
export { AddressMap };
