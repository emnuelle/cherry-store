import React from 'react';
import Table from 'react-bootstrap/Table';

function Tabela() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Tamanho</th>
          <th>Busto (cm)</th>
          <th>Cintura (cm)</th>
          <th>Quadril (cm)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PP</td>
          <td>80-84</td>
          <td>60-64</td>
          <td>84-88</td>
        </tr>
        <tr>
          <td>P</td>
          <td>85-89</td>
          <td>65-69</td>
          <td>89-93</td>
        </tr>
        <tr>
          <td>M</td>
          <td>90-94</td>
          <td>70-74</td>
          <td>94-98</td>
        </tr>
        <tr>
          <td>G</td>
          <td>95-99</td>
          <td>75-79</td>
          <td>99-103</td>
        </tr>
        <tr>
          <td>GG</td>
          <td>100-104</td>
          <td>80-84</td>
          <td>104-108</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tabela;
