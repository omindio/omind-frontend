import React from 'react';
import { Table, Button, Badge } from 'react-bootstrap';
import { MdEdit, MdDelete, MdDone, MdWarning } from 'react-icons/md';

import IdTooltip from '../IdTooltip';
import Loader from '../Loader';

const VideosTable = ({ isFetching, videos, openDeleteModal, openEditModal }) => {
  return (
    <>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th className="d-none d-sm-table-cell">Url</th>
            <th className="d-none d-sm-table-cell">Source</th>
            <th className="d-none d-sm-table-cell">Published</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {(isFetching && (
            <tr>
              <td colSpan="6">
                <Loader />
              </td>
            </tr>
          )) ||
            (videos.length > 0 &&
              videos.map(video => (
                <tr key={video.id}>
                  <td>
                    <IdTooltip id={video.id} />
                  </td>

                  <td>{video.title}</td>
                  <td className="d-none d-sm-table-cell">{video.url}</td>
                  <td className="d-none d-sm-table-cell">{video.source}</td>

                  <td className="d-none d-sm-table-cell">
                    {video.published === true ? (
                      <Badge variant="success">
                        <MdDone />
                      </Badge>
                    ) : (
                      <Badge variant="warning">
                        <MdWarning />
                      </Badge>
                    )}
                  </td>
                  <td className="text-right">
                    <Button
                      onClick={() =>
                        openEditModal(
                          video.id,
                          video.published,
                          video.title,
                          video.source,
                          video.url,
                        )
                      }
                      disabled={isFetching}
                      variant="primary"
                      size="sm"
                    >
                      <MdEdit />
                    </Button>
                    <Button
                      onClick={() => openDeleteModal(video.id)}
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
                <td colSpan="6">No results found.</td>
              </tr>
            )}
        </tbody>
      </Table>
    </>
  );
};

export default VideosTable;
