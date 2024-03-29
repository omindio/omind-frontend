import React from 'react';
import { Table, Button, Badge } from 'react-bootstrap';
import { MdEdit, MdDelete, MdDone, MdWarning, MdClose } from 'react-icons/md';

import IdTooltip from '../IdTooltip';
import Loader from '../Loader';

const ImagesTable = ({ isFetching, images, openDeleteModal, openEditModal }) => {
  return (
    <>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th className="d-none d-sm-table-cell">Title</th>
            <th className="d-none d-sm-table-cell">Published</th>
            <th className="d-none d-sm-table-cell">Main</th>
            <th className="d-none d-sm-table-cell">Cover Page</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {(isFetching && (
            <tr>
              <td colSpan="7">
                <Loader />
              </td>
            </tr>
          )) ||
            (images.length > 0 &&
              images.map(image => (
                <tr key={image.id}>
                  <td>
                    <IdTooltip id={image.id} />
                  </td>
                  <td>
                    <img width="70" alt="" src={`${process.env.API_URL_IMAGE}/${image.path}`} />
                  </td>
                  <td className="d-none d-sm-table-cell">{image.title}</td>
                  <td className="d-none d-sm-table-cell">
                    {image.published === true ? (
                      <Badge variant="success">
                        <MdDone />
                      </Badge>
                    ) : (
                      <Badge variant="warning">
                        <MdWarning />
                      </Badge>
                    )}
                  </td>
                  <td className="d-none d-sm-table-cell">
                    {image.main === true ? (
                      <Badge variant="success">
                        <MdDone />
                      </Badge>
                    ) : (
                      <Badge variant="warning">
                        <MdClose />
                      </Badge>
                    )}
                  </td>
                  <td className="d-none d-sm-table-cell">
                    {image.coverPage === true ? (
                      <Badge variant="success">
                        <MdDone />
                      </Badge>
                    ) : (
                      <Badge variant="warning">
                        <MdClose />
                      </Badge>
                    )}
                  </td>
                  <td className="text-right">
                    <Button
                      onClick={() =>
                        openEditModal(
                          image.id,
                          image.published,
                          image.title,
                          image.main,
                          image.coverPage,
                          image.path,
                        )
                      }
                      disabled={isFetching}
                      variant="primary"
                      size="sm"
                    >
                      <MdEdit />
                    </Button>
                    <Button
                      onClick={() => openDeleteModal(image.id)}
                      disabled={isFetching}
                      className="ml-1"
                      variant="danger"
                      size="sm"
                    >
                      <MdDelete />
                    </Button>
                  </td>
                </tr>
              ))) || (
              <tr>
                <td colSpan="7">No results found.</td>
              </tr>
            )}
        </tbody>
      </Table>
    </>
  );
};

export default ImagesTable;
