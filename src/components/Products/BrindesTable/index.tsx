import React from 'react';
import {
  TableWrapper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  TableTitle,
  TableNote
} from './styles';

interface TableItem {
  name: string;
  capacity: string;
}

interface BrindesTableProps {
  items: TableItem[];
}

export const BrindesTable = ({ items }: BrindesTableProps) => {
  if (!items || items.length === 0) return null;

  return (
    <TableWrapper>
      <TableTitle>📋 Tabela de Brindes</TableTitle>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>#</TableHeader>
            <TableHeader>Produto</TableHeader>
            <TableHeader align="center">Capacidade</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="center">{item.capacity || '-'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableNote>* Capacidades conforme especificações do fabricante.</TableNote>
    </TableWrapper>
  );
};