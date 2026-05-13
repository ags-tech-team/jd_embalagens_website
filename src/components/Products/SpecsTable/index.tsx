import { TableContainer, Table, TableTitle, TableHeader, TableRow, TableCell } from './styles';

interface SpecsTableProps {
  data: {
    title: string;
    columns: string[];
    rows: Array<{ col1: string; col2: string; col3?: string; col4?: string }>;
  };
}

export const SpecsTable = ({ data }: SpecsTableProps) => {
  const hasFourColumns = data.columns.length === 4;

  return (
    <TableContainer>
      <TableTitle>{data.title}</TableTitle>
      <Table>
        <thead>
          <TableRow>
            {data.columns.map((col, idx) => (
              <TableHeader key={idx}>{col}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {data.rows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.col1}</TableCell>
              <TableCell>{row.col2}</TableCell>
              {hasFourColumns && (
                <>
                  <TableCell>{row.col3}</TableCell>
                  <TableCell>{row.col4}</TableCell>
                </>
              )}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};